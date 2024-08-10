
body {
  padding: 0;
  margin: 0;
}

.App {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
  text-align: center;
  background-color: #3b5998;
  color: white;
  width: 100%;
}

.app-container {
  margin-top: 50px;
}

.room {
  display: flex;
  flex-direction: column;
}

.room label {
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
}

.room input {
  width: 200px;
  height: 30px;
  border: 2px solid #3b5998;
  border-radius: 6px;
  padding-left: 5px;
  font-size: 20px;
  text-align: center;
  margin: 5px;
}
.room button {
  width: 210px;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding-left: 5px;
  font-size: 20px;
  text-align: center;
  margin: 5px;
  background-color: #3b5998;
  color: white;
  cursor: pointer;
}

.sign-out {
  margin-top: 50px;
}
