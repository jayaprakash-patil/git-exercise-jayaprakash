var constants = {
   'ALL': '-All'  
};
var TennisGame1 = function(player1Name, player2Name) {
	this.match1_score = 0;
    this.match2_score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.match1_score += 1;
    else
        this.match2_score += 1;
};


TennisGame1.prototype.getScore = function() {
    var score = "";

    if (this.match1_score === this.match2_score) {
        score = getGameScore(this.match1_score, "", constants.ALL);
    }
    else if (this.match1_score >= 4 || this.match2_score >= 4) {
        var minusResult = this.match1_score - this.match2_score;        
		score=TennisGame1.prototype.getAdvWinScore(minusResult,"") ;
    }
    else {
        var tempScore = 0;
        for (var i = 1; i < 3; i++) {
            if (i === 1) {tempScore = this.match1_score;}
            else {score += "-"; tempScore = this.match2_score;}

        score = getGameScore(tempScore, score, "");
        }
    }
    return score;
};

TennisGame1.prototype.getAdvWinScore = function(minusResult,score) {	
    if (minusResult === 1) score = "Advantage player1";
    else if (minusResult === -1) score = "Advantage player2";
    else if (minusResult >= 2) score = "Win for player1";
    else score = "Win for player2";
	return score;
};


function getGameScore(tempScore, score, score_All) {
    switch (tempScore) {
        case 0:
            score += "Love" + score_All;
            break;
        case 1:
            score += "Fifteen" + score_All;
            break;
        case 2:
            score += "Thirty" + score_All;
            break;
        case 3:
            if(score_All === "-All")  score = "Deuce";
            else score+="Forty";
            break;
        default:
            if(score_All == "-All") score = "Deuce";
              else break;
        }
  return score;
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
