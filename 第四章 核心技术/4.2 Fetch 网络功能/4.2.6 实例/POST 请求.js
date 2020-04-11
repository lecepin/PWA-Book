// Content-Type: text/plain
fetch("./", {
  method: "POST",
  body: "11111"
});

// Content-Type: application/x-www-form-urlencoded
const u = new URLSearchParams();
u.append("a", 1);
u.append("b", 2);
fetch("./", {
  method: "POST",
  body: u
});

// Content-Type: multipart/form-data
const f = new FormData();
f.append("c", 3);
f.append("d", 4);
fetch("./", {
  method: "POST",
  body: f
});

// 当然也可以直接指定，如 json
const j = {
  e: 5,
  f: 6
};
fetch("./", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(j)
});