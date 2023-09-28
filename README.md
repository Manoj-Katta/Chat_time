
## Submission Details
Name: Katta Manoj

University: IIT Jammu

Department: Computer Science and Engineering

Design Document: https://docs.google.com/document/d/18cg4mxh4eM13QgPy-UQdpx8cgZjmR2L_51Hok7NT0ck/edit

# Chat Time

In this digital age, communication plays a pivotal role in connecting people across the globe. Chat Time aims to develop a modern messaging app prototype with essential features such as user registration, and real-time messaging. This will provide an intuitive user interface and robust backend architecture, leveraging best practices for web development.


## Features

1. **User Registration and Authentication:**
   - Users can register with their email ID.
   - Implement authentication mechanisms like email verification.
 
2. **Sending and Receiving Text Messages:**
   - Users can send and receive text messages in real-time.
   - Messages should support rich text formatting. 

3. **Real-Time Message Updates:**
   - Messages should be delivered in real-time using web sockets.
   - Implement message read and delivery indicators.


## Installation


Clone this repository locally.
```bash
https://github.com/Manoj-Katta/Chat_time
```
Install dependencies

```bash
cd client
npm install
cd ../server
npm install
```

To run the web app locally, use the following commands:
```bash
cd client
npm run start
cd server
nodemon index.js