function CalcVowels() {
            alert("Calculate vowels");
            // Write code here for calculate the vowels in a string
            // get input value from vowels id 
            //Split the value
            input = document.getElementById('vowels').value;
            calV = input.split('');
        

        

        }

// Get the user input with document.getElementById
// calculate the volume with the formula
// use document.getElementbyId again to insert the result within the VolumeResult ID
        function CalcVolume() {
            alert("calculate the volume of a sphere");
             radV= document.getElementById('radius').value;
             volume = (4 / 3) * Math.PI * Math.pow(radV, 3);
            
             document.getElementById('VolumeResult').innerText = volume;



        }
{/* 
// Used document.getElementById to get the value from when the user input
// Used an If statment with multiple conditions to fulfill the requirements
// used document.getElementById again with .innertext to have the result show up within the GradeResult ID */}
        function ShowGrade() {
            alert("Show Grade");
            mark = document.getElementById('Mark').value;
             if( (mark >= 90) && (mark <= 100)){
                resultText = "Mark: A";

            }
            else if ( (mark >= 80) && (mark <= 89)){
                 resultText = "Mark: B";
            }
            else if ( (mark >= 70) && (mark <= 79)){
                resultText = "Mark: C";
            }
            else if ( (mark >= 60) && (mark <= 69)){
                resultText = "Mark: D";
            }
            else if ( (mark >= 0) && (mark <=59)){
                resultText = "Mark: E";
            }
            else{
                resultText = "fail";;
            }

        document.getElementById('GradeResult').innerText = resultText;


        }