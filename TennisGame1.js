var score = "";
var m_score1=0;
var m_score2=0;
var TennisGame1 = function(player1Name, player2Name) {
    m_score1=0;
	m_score2=0;
    var player1Name = player1Name;
    var player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        m_score1 += 1;
    else
        m_score2 += 1;
};



TennisGame1.prototype.getScore = function() {	
	
    if (m_score1 === m_score2) {
        score=TennisGame1.prototype.getAllScore();
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        score=TennisGame1.prototype.getAdvWinScore();
    } else {
        score=TennisGame1.prototype.getIndividualScore(score);
    }
    return score;
};

TennisGame1.prototype.getAllScore = function() {
    switch (m_score1) {
        case 0:
            score = "Love-All";
            break;
        case 1:
            score = "Fifteen-All";
            break;
        case 2:
            score = "Thirty-All";
            break;
        default:
            score = "Deuce";
            break;
    }
	return score;
};

TennisGame1.prototype.getAdvWinScore = function() {	
    var minusResult = m_score1 - m_score2;
    if (minusResult === 1) score = "Advantage player1";
    else if (minusResult === -1) score = "Advantage player2";
    else if (minusResult >= 2) score = "Win for player1";
    else score = "Win for player2";
	return score;
};

TennisGame1.prototype.getIndividualScore = function() {
    var tempScore = 0;
    var i = 1;
    for (i = 1; i < 3; i++) {
        if (i === 1) tempScore = m_score1;
        else {
            score += "-";
            tempScore = m_score2;
        }
        switch (tempScore) {
            case 0:
                score += "Love";
                break;
            case 1:
                score += "Fifteen";
                break;
            case 2:
                score += "Thirty";
                break;
            case 3:
                score += "Forty";
                break;
        }
    }
	return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}