import typography from "@tailwindcss/typography";
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            boxShadow: {
                soft: "0 16px 48px rgba(15, 23, 42, 0.08)",
            },
        },
    },
    plugins: [typography],
};
