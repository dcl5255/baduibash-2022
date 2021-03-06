let levels = [];

function setupLevels() {
    let tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 0, 20, 460));
    tempLevel.lines.push(new Line(20, 460, 320, 460, logLanding = true, linkedElement = document.getElementById("firstNameField")));
    tempLevel.lines.push(new Line(320, 460, 320, 820));
    tempLevel.lines.push(new Line(320, 820, 880, 820));
    tempLevel.lines.push(new Line(880, 820, 880, 460));
    tempLevel.lines.push(new Line(880, 460, 1180, 460));
    tempLevel.lines.push(new Line(1180, 460, 1180, 0));
    tempLevel.lines.push(new Line(460, 100, 740, 100));
    tempLevel.lines.push(new Line(460, 100, 460, 220));
    tempLevel.lines.push(new Line(460, 220, 740, 220));
    tempLevel.lines.push(new Line(740, 220, 740, 100));
    levels.push(tempLevel);

    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 0, 20, 200));
    tempLevel.lines.push(new Line(20, 200, 200, 200, logLanding = true, linkedElement = document.getElementById("emailField")));
    tempLevel.lines.push(new Line(200, 200, 200, 420));
    tempLevel.lines.push(new Line(200, 420, 20, 420));
    tempLevel.lines.push(new Line(20, 420, 20, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 580));
    tempLevel.lines.push(new Line(1180, 580, 1020, 580));
    tempLevel.lines.push(new Line(1020, 580, 1020, 500));
    tempLevel.lines.push(new Line(1020, 500, 1180, 500));
    tempLevel.lines.push(new Line(1180, 500, 1180, 0));
    tempLevel.lines.push(new Line(740, 740, 980, 740, logLanding = true, linkedElement = document.getElementById("lastNameField")));
    tempLevel.lines.push(new Line(980, 740, 980, 820));
    tempLevel.lines.push(new Line(980, 820, 740, 820));
    tempLevel.lines.push(new Line(740, 820, 740, 740));
    tempLevel.lines.push(new Line(640, 500, 640, 580));
    tempLevel.lines.push(new Line(640, 580, 820, 580));
    tempLevel.lines.push(new Line(820, 580, 820, 500));
    tempLevel.lines.push(new Line(820, 500, 640, 500));
    tempLevel.lines.push(new Line(300, 260, 300, 420));
    tempLevel.lines.push(new Line(300, 420, 480, 420));
    tempLevel.lines.push(new Line(480, 420, 480, 260));
    tempLevel.lines.push(new Line(480, 260, 300, 260));
    levels.push(tempLevel);

    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 0, 20, 240));
    tempLevel.lines.push(new Line(20, 240, 160, 240));
    tempLevel.lines.push(new Line(160, 240, 160, 280));
    tempLevel.lines.push(new Line(160, 280, 20, 280));
    tempLevel.lines.push(new Line(20, 280, 20, 900));
    tempLevel.lines.push(new Line(340, 0, 340, 40));
    tempLevel.lines.push(new Line(340, 40, 520, 40));
    tempLevel.lines.push(new Line(520, 40, 520, 0));
    tempLevel.lines.push(new Line(400, 420, 400, 300));
    tempLevel.lines.push(new Line(400, 300, 540, 300));
    tempLevel.lines.push(new Line(540, 300, 540, 420));
    tempLevel.lines.push(new Line(540, 420, 400, 420));
    tempLevel.lines.push(new Line(520, 760, 520, 800));
    tempLevel.lines.push(new Line(520, 800, 640, 800));
    tempLevel.lines.push(new Line(640, 800, 640, 760));
    tempLevel.lines.push(new Line(640, 760, 520, 760));
    tempLevel.lines.push(new Line(800, 760, 800, 800));
    tempLevel.lines.push(new Line(800, 800, 940, 800));
    tempLevel.lines.push(new Line(940, 800, 940, 760));
    tempLevel.lines.push(new Line(940, 760, 800, 760, logLanding = true, linkedElement = document.getElementById("phoneField")));
    tempLevel.lines.push(new Line(1180, 900, 1180, 680));
    tempLevel.lines.push(new Line(1180, 680, 1060, 680));
    tempLevel.lines.push(new Line(1060, 680, 1060, 640));
    tempLevel.lines.push(new Line(1060, 640, 1180, 640));
    tempLevel.lines.push(new Line(1180, 640, 1180, 0));
    tempLevel.lines.push(new Line(480, 560, 480, 640));
    tempLevel.lines.push(new Line(480, 640, 840, 640));
    tempLevel.lines.push(new Line(840, 640, 840, 520));
    tempLevel.lines.push(new Line(840, 520, 720, 520));
    tempLevel.lines.push(new Line(720, 520, 720, 560));
    tempLevel.lines.push(new Line(720, 560, 480, 560));
    levels.push(tempLevel);

    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 0, 20, 540));
    tempLevel.lines.push(new Line(20, 540, 160, 540));
    tempLevel.lines.push(new Line(160, 540, 160, 580));
    tempLevel.lines.push(new Line(160, 580, 20, 580));
    tempLevel.lines.push(new Line(20, 580, 20, 900));
    tempLevel.lines.push(new Line(340, 900, 340, 800));
    tempLevel.lines.push(new Line(340, 800, 520, 800));
    tempLevel.lines.push(new Line(520, 800, 520, 900));
    tempLevel.lines.push(new Line(1180, 0, 1180, 320));
    tempLevel.lines.push(new Line(1180, 320, 1080, 320));
    tempLevel.lines.push(new Line(1080, 320, 1080, 360));
    tempLevel.lines.push(new Line(1080, 360, 1180, 360));
    tempLevel.lines.push(new Line(1180, 360, 1180, 900));
    tempLevel.lines.push(new Line(340, 0, 340, 420));
    tempLevel.lines.push(new Line(340, 420, 440, 420));
    tempLevel.lines.push(new Line(440, 420, 440, 220));
    tempLevel.lines.push(new Line(440, 220, 380, 220));
    tempLevel.lines.push(new Line(380, 220, 380, 0));
    tempLevel.lines.push(new Line(340, 540, 340, 580));
    tempLevel.lines.push(new Line(340, 580, 520, 580));
    tempLevel.lines.push(new Line(520, 580, 520, 540));
    tempLevel.lines.push(new Line(520, 540, 340, 540));
    tempLevel.lines.push(new Line(740, 400, 740, 580));
    tempLevel.lines.push(new Line(740, 580, 860, 580));
    tempLevel.lines.push(new Line(860, 580, 860, 220));
    tempLevel.lines.push(new Line(860, 220, 1000, 220));
    tempLevel.lines.push(new Line(1000, 220, 1000, 180));
    tempLevel.lines.push(new Line(1000, 180, 820, 180));
    tempLevel.lines.push(new Line(820, 180, 820, 400));
    tempLevel.lines.push(new Line(820, 400, 740, 400, logLanding = true, linkedElement = document.getElementById("addressField")));
    tempLevel.lines.push(new Line(820, 0, 820, 40));
    tempLevel.lines.push(new Line(820, 40, 860, 40));
    tempLevel.lines.push(new Line(860, 40, 860, 0));
    levels.push(tempLevel);

    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 640));
    tempLevel.lines.push(new Line(20, 640, 100, 640));
    tempLevel.lines.push(new Line(100, 640, 100, 600));
    tempLevel.lines.push(new Line(100, 600, 20, 600));
    tempLevel.lines.push(new Line(20, 600, 20, 0));
    tempLevel.lines.push(new Line(380, 900, 380, 780));
    tempLevel.lines.push(new Line(380, 780, 280, 780));
    tempLevel.lines.push(new Line(280, 780, 280, 820));
    tempLevel.lines.push(new Line(280, 820, 340, 820));
    tempLevel.lines.push(new Line(340, 820, 340, 900));
    tempLevel.lines.push(new Line(820, 900, 820, 780));
    tempLevel.lines.push(new Line(820, 780, 920, 780));
    tempLevel.lines.push(new Line(920, 780, 920, 820));
    tempLevel.lines.push(new Line(920, 820, 860, 820));
    tempLevel.lines.push(new Line(860, 820, 860, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 460));
    tempLevel.lines.push(new Line(1180, 460, 1100, 460));
    tempLevel.lines.push(new Line(1100, 460, 1100, 400));
    tempLevel.lines.push(new Line(1100, 400, 1180, 400));
    tempLevel.lines.push(new Line(1180, 400, 1180, 0));
    tempLevel.lines.push(new Line(920, 640, 820, 640));
    tempLevel.lines.push(new Line(820, 640, 820, 600));
    tempLevel.lines.push(new Line(820, 600, 920, 600, logLanding = true, linkedElement = document.getElementById("resumeFileField")));
    tempLevel.lines.push(new Line(920, 600, 920, 640));
    tempLevel.lines.push(new Line(100, 220, 100, 260));
    tempLevel.lines.push(new Line(100, 260, 180, 260));
    tempLevel.lines.push(new Line(180, 260, 180, 220));
    tempLevel.lines.push(new Line(180, 220, 100, 220, logLanding = true, linkedElement = document.getElementById("submitBtn")));
    tempLevel.lines.push(new Line(800, 220, 800, 260));
    tempLevel.lines.push(new Line(800, 260, 720, 260));
    tempLevel.lines.push(new Line(720, 260, 720, 220));
    tempLevel.lines.push(new Line(720, 220, 800, 220));
    tempLevel.lines.push(new Line(560, 180, 560, 220));
    tempLevel.lines.push(new Line(560, 220, 640, 220));
    tempLevel.lines.push(new Line(640, 220, 640, 180));
    tempLevel.lines.push(new Line(640, 180, 560, 180));
    tempLevel.lines.push(new Line(400, 140, 400, 180));
    tempLevel.lines.push(new Line(400, 180, 480, 180));
    tempLevel.lines.push(new Line(480, 180, 480, 140));
    tempLevel.lines.push(new Line(480, 140, 400, 140));
    tempLevel.lines.push(new Line(0, 40, 1220, 40));
    levels.push(tempLevel);

    for (let i = 0; i < levels.length; i++) {
        levels[i].levelImage = levelImages[i];
    }
}