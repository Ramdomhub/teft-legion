export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      type: "action",
      icon: "https://placehold.co/200x200",
      title: "You were not meant to find this.",
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

    if (step === "1") {
      return res.status(200).json({
        type: "action",
        title: "Most people never reach this point.",
        label: "Continue",
        links: {
          actions: [
            { label: "Continue", href: "/api/claim?step=2" }
          ]
        }
      });
    }

    if (step === "2") {
      return res.status(200).json({
        type: "action",
        title: "We don’t explain this.",
        description: "You either understand it or you don’t.",
        label: "I understand",
        links: {
          actions: [
            { label: "I understand", href: "/api/claim?step=3" }
          ]
        }
      });
    }

    if (step === "3") {
      return res.status(200).json({
        type: "action",
        title: "You are early.",
        description: "This is not for everyone.",
        label: "Continue",
        links: {
          actions: [
            { label: "Continue", href: "/api/claim?step=4" }
          ]
        }
      });
    }

    if (step === "4") {
      return res.status(200).json({
        type: "completed",
        title: "You are part of it now.",
        description: "There’s no announcement. There’s no explanation.",
        message: "Come back tomorrow."
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
