// SUBMIT / POST
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const data = {
    emne: formData.get("emne"),
    semester: formData.get("semester"),
    beskrivelse: formData.get("beskrivelse"),
    karakter: formData.get("karakter"),
    link: formData.get("link"),
    emnetype: formData.get("emnetype"),
  };

  const res = await fetch("http://10.0.0.13:3000/admin/adminDashboard", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    console.log("OK!!");
  } else {
    console.log("NOT OK!!");
  }
});
