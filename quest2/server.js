const express = require("express");
const path = require("path"); // 파일과 디렉터리 경로를 다루기 위한 유틸리티를 제공하는 Node.js의 기본 모듈
const cors = require("cors"); // 브라우저 보안 기능으로, 다른 출처의 리소스에 대한 요청을 제어
const { parsing } = require("./naver_crolling");

const app = express();
const port = 3000;

// CORS 설정, 모든 출처에서의 요청 허용
app.use(cors());

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, "public")));

// 루트 경로에 대한 라우트 추가 (homepage.html 제공)
app.get("/", (req, res) => {
  // localhost:3000에 접속 시 homepage.html을 불러옴.
  res.sendFile(path.join(__dirname, "public", "homepage.html"));
});

app.get("/get-data", async (req, res) => {
  try {
    const data = await parsing();
    console.log("Data received from parsing:", data); // 데이터 확인용 로그 추가

    if (data && Array.isArray(data)) {
      res.json(data);
    } else {
      console.error("Invalid data format:", data);
      res.status(500).json({ error: "Invalid data format" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Failed to fetch data");
  }
});

app.listen(port, () => {
  console.log(`서버가 실행되었습니다. 접속주소: http://localhost:${port}`);
});
