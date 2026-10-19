// Simple demo interactions
document.addEventListener('DOMContentLoaded', function(){
  var tryBtn = document.getElementById('tryBtn');
  var tryResult = document.getElementById('tryResult');
  var cta = document.getElementById('cta');

  if(tryBtn){
    tryBtn.addEventListener('click', function(){
      tryResult.textContent = 'تم تنفيذ تجربة وهمية — هذا نص تجريبي للمعاينة.';
      tryBtn.disabled = true;
      setTimeout(function(){ tryBtn.disabled = false; }, 1500);
    });
  }

  if(cta){
    cta.addEventListener('click', function(){
      // analytics hook placeholder
      console.log('CTA clicked: Start building');
    });
  }
});
