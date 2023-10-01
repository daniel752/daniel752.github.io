var typingTimeouts = {};

const typeWriter = (id, text, speed, callback) => {
  let i = 0;
  const length = text.length;
  const element = document.getElementById(id);

  function type() {
    if (i < length) {
      element.innerHTML += text.charAt(i);
      i++;
      typingTimeouts[id] = setTimeout(type, speed);
    } else {
      clearTimeout(typingTimeouts[id]);
      if (callback) callback();
    }
  }

  type();
};

export default typeWriter;
