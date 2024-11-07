const apiEndpoint = "http://localhost:8000/api/messages";

async function getMessages() {
   const response = await fetch(apiEndpoint);
   if (response.ok) {
      return response.json();        
   }
   else {
      console.log(response);
      return null;
   }
}

async function getMessage(messageId) {
   const response = await fetch(`${apiEndpoint}/${messageId}`);
   if (response.ok) {
      return response.json();       
   }
   else {
      console.log(response);
      return null;
   }
}

async function addMessage(message) {
   const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
   })
   if (response.ok) {
      return response.body;       
   }
   else {
      console.log(response);
      return null;
   }
}

async function editMessage(messageId, messagePart) {
   const response = await fetch(`${apiEndpoint}/${messageId}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(messagePart),
   })
   if (response.ok) {
      return response.body;
   }
   else {
      console.log(response);
      return null;
   }
}

async function deleteMessage(messageId) {
   const response = await fetch(`${apiEndpoint}/${messageId}`, {
      method: "DELETE"
   });
   if (response.ok) {
      return response.body;
   }
   else {
      console.log(response);
      return null;
   }
}

export {      
   getMessages,
   getMessage,
   addMessage,
   editMessage,
   deleteMessage
};