var idOk = false;
var pwOk = false;
var nameOk = false;
var emaillOk = false;
var nickNameOk = false;
const correctColor = "blue";
const wrongColor = "red";

// *********************************************************** capslock check
function checkCapsLock(event) {
  if (event.getModifierState("CapsLock")) {
    document.getElementById("msgCapslock").innerHTML = "<p style='box-shadow: inset 0 -0.5em 0 #FEE715;'>Caps Lock이 켜져 있습니다.</p>"
  } else {
    document.getElementById("msgCapslock").innerText
      = ""
  }
}
// *********************************************************** capslock check fin.

// *************************************************************** ID check
function checkId(id) {

  const msgId = document.getElementById("msgId");
  //아이디 영소문자+숫자 (4~16자리 입력) 정규식
  const idRegExp = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{4,16}$/;

  if (idRegExp.test(id)) {
    msgId.style.color = correctColor;
    msgId.innerHTML = "사용 가능한 아이디 입니다. ✔";
    idOk = true;
  } else {
    msgId.style.color = wrongColor;
    msgId.innerHTML = "사용 불가한 아이디 입니다.";
    idOk = false;
  }
}
// *************************************************************** ID check fin.

// **************************************************** PW + capslock check
function checkPw(pw, event) {
  // pw check
  const msgPw = document.getElementById("msgPw");
  //비밀번호 영소문자+영대문자+숫자+특수조합(8~16자리 입력) 정규식
  const pwRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])[a-zA-Z0-9!@#$%^*+=-]{8,16}$/;

  if (pwRegExp.test(pw)) {
    msgPw.style.color = correctColor;
    msgPw.innerHTML = "비밀번호 형식에 맞습니다. ✔";
    pwOk = true;
  } else {
    msgPw.style.color = wrongColor;
    msgPw.innerHTML = "비밀번호 형식에 맞지 않습니다.";
    pwOk = false;
  }

  // capslock check
  if (event.getModifierState("CapsLock")) {
    document.getElementById("msgCapslock").innerHTML = "<p style='box-shadow: inset 0 -0.5em 0 #FEE715;'>Caps Lock이 켜져 있습니다.</p>"
  } else {
    document.getElementById("msgCapslock").innerText
      = ""
  }
}
// **************************************************** PW + capslock check fin.

// *************************************************************** name check
function checkName(name) {
  const msgName = document.getElementById("msgName");
  //이름 영소문자+영대문자+한글(1~15) 정규식
  // const nameRegExp = /^[가-힣]{2,4}|[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/; // -> error
  //이름 한글(2~5) 정규식
  const nameRegExp = /^[가-힣]{2,5}$/;

  if (nameRegExp.test(name)) {
    msgName.style.color = correctColor;
    msgName.innerHTML = "사용 가능한 이름 입니다. ✔";
    nameOk = true;
  } else {
    msgName.style.color = wrongColor;
    msgName.innerHTML = "사용 불가한 이름 입니다.";
    nameOk = false;
  }
}
// *************************************************************** name check fin.

// *************************************************************** email check
function checkEmail(userMail) {
  const msgEmail = document.getElementById("msgEmail");
  //이메일 정규식
  const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailRegExp.test(userMail)) {
    msgEmail.style.color = correctColor;
    msgEmail.innerHTML = "사용 가능한 이메일 입니다. ✔";
    emaillOk = true;
  } else {
    msgEmail.style.color = wrongColor;
    msgEmail.innerHTML = "이메일을 확인해주세요.";
    emaillOk = false;
  }
}
// *************************************************************** email check fin.

// *************************************************************** email check
function checkNickName(userNick) {
  const msgNickName = document.getElementById("msgNickName");
  //닉네임 영문 대문자/소문자/숫자 사용가능, 2~16자
  const nickNameRegExp = /[a-zA-Z0-9]{2,16}$/;

  if (nickNameRegExp.test(userNick)) {
    msgNickName.style.color = correctColor;
    msgNickName.innerHTML = "사용 가능한 닉네임 입니다. ✔";
    nickNameOk = true;
  } else {
    msgNickName.style.color = wrongColor;
    msgNickName.innerHTML = "사용할 수 없는 닉네임 입니다.";
    nickNameOk = false;
  }
}
// *************************************************************** email check fin.