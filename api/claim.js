export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      type: "action",
      icon: "https://placehold.co/200x200",
      title: "This is not for everyone.",
      description: "",
      label: "Continue",
      links: {
        actions: [
          { label: "Continue", href: "/api/claim?step=1" }
        ]
      }
    });
  }

  if (req.method === "POST") {
    const step = req.query.step || "1";
    const account = req.body?.account || null;

    if (step === "1") {
      return res.status(200).json({
        type: "action",
        icon: "https://placehold.co/200x200",
        title: "Most people leave here.",
        description: "",
        label: "Stay",
        links: {
          actions: [
            { label: "Stay", href: "/api/claim?step=2" }
          ]
        }
      });
    }

    if (step === "2") {
      return res.status(200).json({
        type: "action",
        icon: "https://placehold.co/200x200",
        title: "If you stay, you’re being watched.",
        description: "",
        label: "Prove it",
        links: {
          actions: [
            { label: "Prove it", href: "/api/claim?step=3" }
          ]
        }
      });
    }

    if (step === "3") {
      return res.status(200).json({
        type: "completed",
        icon: "https://placehold.co/200x200",
        title: "You passed.",
        description: "We know you stayed.",
        label: "Done",
        message: account
          ? `Signal received from ${account.slice(0, 4)}...${account.slice(-4)}`
          : "Signal received."
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
