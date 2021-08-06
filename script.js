document.getElementById("print").addEventListener("click", () => {
  print()
})

document.getElementById("clear").addEventListener("click", () => {
  if (confirm("Are you sure you wish to clear your document? After it is cleared, you CANNOT ever get its current contents back. Are you still certain? (Cancel to Cancel, Ok to continue.)")) {
    if (confirm("Are you really, 100% sure? This is your last warning. If you choose Ok the current contents of this document will be lost forever. Press Cancel and you'll be safe.")) {
      document.getElementById("editor").innerHTML = ""
    }
  }
})
