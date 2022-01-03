function convertScoreToGrade(score) {
   
   if (score > 100 || score < 0){
       return 'INVALID RESPONSE';
        } else if (score  >= 90 && score <=100 ){
                if (score >= 90 && score <= 92){
                    return 'A-'
                }else if (score >= 98 && score <= 100) {
                    return 'A+'
                } else return 'A'
            } else if ( score >= 80 && score <= 89){
                    if (score >= 80 && score <= 82){
                        return 'B-';
                    } else if (score >= 88 & score <= 89) {
                        return 'B+'
                    } else return 'B'
                } else if (score >= 70 && score <= 79){
                        if (score >= 70 && score <= 72){
                            return 'C-';
                        } else if (score >= 78 && score <= 79){
                            return 'C+';
                        } else return 'C'
                    } else if (score >= 60 && score <= 69){
                            if (score >= 60 && score <= 62 ){
                                return 'D-';
                            } else if (score >= 68 && score <= 69){
                                return 'D+';
                            } else return 'D'
                        } else if (score >=0 && score <= 59){
                            return 'F'
                            } else if (score !== typeof 'number'){
                                return 'I don\'t think that is a number...try again.'
                            }
             
    }
console.log(convertScoreToGrade(66))
