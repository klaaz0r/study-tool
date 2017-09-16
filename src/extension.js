export default function() {
  const verify = {
    type: 'lang',
    regex: /#VERIFIED/g,
    replace: '<span class="badge badge-success">Verified</span>'
  }

  const answerStart = {
    type: 'lang',
    regex: /#ASTART/g,
    replace: '<div class="answer" onclick="showAnswer(this)"><span id="text">'
  }

  const answerEnd = {
    type: 'lang',
    regex: /#AEND/g,
    replace: '</span></div>'
  }
  return [answerStart, answerEnd, verify]
}
