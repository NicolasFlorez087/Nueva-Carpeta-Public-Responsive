window.onload = function(event){
    var elems = Array.prototype.slice.call(document.getElementsByClassName('mrQuestionTable')[0].getElementsByTagName('tr'));
    var container = document.getElementsByClassName('stb-expanded')[0];
    var content = document.getElementsByClassName('content')[0];
    var answers = Array.prototype.slice.call(content.getElementsByClassName('mrGridQuestionText'));
    
    content.innerHTML += '<div class="container"><div class="card hoverable"><div class="card-content">' +   content.getElementsByClassName('mrQuestionText')[0].innerHTML + '</div></div></div>';
    elems.forEach(function(el,index){
        if(index != 0){
            var attributeName = elems[index].getElementsByTagName('td')[0].getElementsByTagName('span')[0].innerText;
        
            var inputElements = Array.prototype.slice.call(elems[index].getElementsByTagName('input'));
            
            var questionTemplate = document.createElement('div');
            questionTemplate.className = 'container';
            questionTemplate.innerHTML = '<div class="card hoverable"><div class="card-content cyan darken-2"><span class="mrQuestionText" style="">' + attributeName + '</span></div><div class="card-action"><div class="input-field"><span style=""><span class="mrQuestionTable" style="display:flex;flex-direction:column;margin-left: 1em;"></span></span></div></div></div></div>';

            var questionContainer = questionTemplate.getElementsByClassName('mrQuestionTable')[0];
            inputElements.forEach(function(el,inputIdx){
                var currentInput = inputElements[inputIdx].cloneNode(true);
                var currentLabel = answers[inputIdx].getElementsByClassName("mrQuestionText")[0].cloneNode(true);
                
                document.getElementById(currentInput.id).remove();

                var optionContainer = document.createElement('span');
                optionContainer.appendChild(currentInput);

                var inputLabel = document.createElement('label');
                
                inputLabel.setAttribute('for',currentInput.id);

                var labelSpan = document.createElement('span');
                labelSpan.className = 'mrMultipleText';
                labelSpan.innerText = currentLabel.innerText;
                inputLabel.appendChild(labelSpan);


                optionContainer.appendChild(inputLabel);

                

                questionContainer.appendChild(optionContainer);


                
            });

            content.appendChild(questionTemplate);
        }
    })
}