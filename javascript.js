const inputs = document.querySelectorAll(".controls input");
console.log(inputs);
inputs.forEach((input) => input.addEventListener("change", handleUpdate));

function handleUpdate() {
  console.log("from function", this.value);
  console.log("dataset", this.dataset);
  //getting the suffix value
  const suffix = this.dataset.sizing || "";
  console.log("suffix", suffix);
  //update the variable
  console.log("attribute", this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
