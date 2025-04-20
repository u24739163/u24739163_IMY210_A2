// u24739163 Mulondi Makhado
export default defineEventHandler(async (event) => {
  // Send an email to the user using the Mailersend API
    const body = await readBody(event)
    try {
      // Post request includes details of the email like the sender, recipient(which is received from the form) and text of the email 
      const response = await $fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${useRuntimeConfig().mailersendKey}`,
          'Content-Type': 'application/json'
        },
        body: {
          from: {
            email: 'test@test-zxk54v88mw1ljy6v.mlsender.net',
            name: 'Mulondi'
          },
          to: [{
            email: body.email,
            name: body.name
          }],
          subject: 'Thank you for your message!',
          text: `Hi ${body.name},\n\nI've received your message:\n\n${body.message}\n\nI'll get back to you soon!`,
          html: `
            <p>Hi ${body.name},</p>
            <p>I've received your message:</p>
            <blockquote>${body.message}</blockquote>
            <p>I'll get back to you soon!</p>
          `,
          reply_to: {
            email: 'test@test-zxk54v88mw1ljy6v.mlsender.net',
            name: 'Mulondi'
          }
        }
      })
  
      return { success: true }
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: ('Failed to send email' + error),
      })
    }
  })
