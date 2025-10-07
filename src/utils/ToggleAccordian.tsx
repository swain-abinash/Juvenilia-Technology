export  const toggleAccordion = (title: string,openAccordion:any,setOpenAccordion:any) => {
    // Don't close if already open - just keep it open
    if (openAccordion !== title) {
      setOpenAccordion(title);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };