<img src="https://i.ibb.co/X89wJkj/Untitled-design-1.png" alt="SparkUp-logo"/>

## SparkUp: Connect, Innovate, Accelerate

<div style="border: 1px solid #ddd; padding: 20px; border-radius: 10px; background-color: #f9f9f9;">
  <h2>🚀 New Development</h2>
  <p>We have developed <strong>SparkUp</strong> as a React-Firebase app too. It's hosted live too. <a href="https://github.com/CODExJATIN/sparkup-react-firebase" style="text-decoration: none; color: #fff; background-color: #007bff; padding: 10px 15px; border-radius: 5px;">Check it out here</a></p>
</div>

SparkUp is a comprehensive platform designed to bridge the gap between startups and investors, fostering meaningful connections and facilitating seamless fundraising processes. Our platform offers innovative features like intro video reels, integrated meeting systems, and direct business proposals, all aimed at revolutionizing the startup funding ecosystem.

## Tech Stack
### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### Real-time communication
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Video-SDK](https://img.shields.io/badge/Video--SDK-007ACC?style=for-the-badge&logo=azure&logoColor=white)

### Deployment
![Render](https://img.shields.io/badge/Render-0099E5?style=for-the-badge&logo=render&logoColor=white)

## Instructions to Run the Code

1. **Clone the repository**:
    ```bash
    git clone https://github.com/CODExJATIN/sparkup-project-hackathon.git
    cd sparkup-project-hackathon
    ```

2. **Install dependencies**:
    ```bash
    # For backend
    cd server
    npm install

    # For frontend
    cd ../client
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `backend` directory with the following contents:
        ```env
        PORT=5000
        MONGO_URL=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```
    - Create a `.env` file in the `frontend` directory with the following contents:
        ```env
        REACT_APP_VIDEOSDK__TOKEN = your_videosdk_token
        ```

4. **Run the application**:
    - Start the backend server:
        ```bash
        cd server
        npm run dev
        ```
    - Start the frontend development server:
        ```bash
        cd client
        npm start
        ```

5. **Access the application**:
    Open your browser and go to `http://localhost:3000`

## Screenshots & Videos

### Video Demonstartions

#### Login
<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExanlzdTA5d2cyN2Z3eDJnbXRlZnQwdmNhaDRqcnJ2cWFyNTJnMTRqdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8EUprheyLn9wBq8CmN/giphy.gif"/>
#### HomePage and Profile Page
<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVxYm4zZ3hxaWI5anV1cXIyMnV5Y2cxM2lmZHRjMGl0Ymh2dnB1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rwJK29UDWbWIAUD2MR/giphy.gif"/>

### Screenshots
#### Login Page
<img src="https://i.ibb.co/z8ydDdr/Screenshot-1426.png" alt="Screenshot-1426" border="0">

#### HomePage & ProfilePage (DarkMode)
<img src="https://i.ibb.co/gt9kJm3/Screenshot-1427.png" alt="Screenshot-1427" border="0">
<img src="https://i.ibb.co/Vx9V775/Screenshot-1428.png" alt="Screenshot-1428" border="0">

#### HomePage & ProfilePage (LightMode)
<img src="https://i.ibb.co/s1FYn5q/Screenshot-1430.png" alt="Screenshot-1430" border="0">
<img src="https://i.ibb.co/cv7Td3x/Screenshot-1429.png" alt="Screenshot-1429" border="0">

