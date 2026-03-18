export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      type: "action",
      icon: "https://placehold.co/200x200",
      title: "Do NOT click this.",
      description: "",
      label: "Enter",
      links: {
        actions: [
          {
            label: "Enter",
            href: "/api/claim?step=1"
          }
        ]
      }
    });
  }

  if (req.method === "POST") {
    const step = req.query.step || "1";

    if (step === "1") {
      return res.status(200).json({
        type: "action",
        icon: "https://placehold.co/200x200",
        title: "Most people leave here.",
        description: "",
        label: "Continue",
        links: {
          actions: [
            {
              label: "Continue",
              href: "/api/claim?step=2"
            }
          ]
        }
      });
    }

    if (step === "2") {
      return res.status(200).json({
        type: "action",
        icon: "https://placehold.co/200x200",
        title: "You stayed.",
        description: "That was not expected.",
        label: "Reveal",
        links: {
          actions: [
            {
              label: "Reveal",
              href: "/api/claim?step=3"
            }
          ]
        }
      });
    }

    if (step === "3") {
      return res.status(200).json({
        type: "completed",
        icon: "https://placehold.co/200x200",
        title: "You passed.",
        description: "Most people fail this.",
        label: "Done",
        message: "Send this to someone who wouldn’t."
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
