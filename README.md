# Free-for-All Chat

A real-time text chat application where users can join instantly by entering a username—no login required! Built with FastAPI and WebSockets for the backend and React with Vite for the frontend.

## Features
✅ Join instantly with just a username  
✅ Live messaging using WebSockets  
✅ Unique color-coded usernames  
✅ Messages formatted properly (supports multi-line code)  
✅ Copy messages with a single click  
✅ User's own messages appear on the right, others on the left  

## Tech Stack
### **Frontend:**
- React (Vite)
- CSS for styling

### **Backend:**
- FastAPI
- WebSockets for real-time communication
- Uvicorn as ASGI server

## Deployment
https://free-for-all-chat.vercel.app/

## Todo list
- Redo the backend using DB
- Store the DB until the session exists and the remove it if all users disconnect.

- (Note to self)
- -- The application is broken since i thought i could connect 2 or more pc's with this without using any db but i couldnt (also i dont have multiple pc's to test at the moment)

 
