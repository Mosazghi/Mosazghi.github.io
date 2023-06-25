const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  const formData = new FormData(form);

  const data = {
    username: formData.get("navn"),
    password: formData.get("pass"),
  };
  console.log("SENDT: ", data);

  await fetch("http://10.0.0.13:3000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
});
