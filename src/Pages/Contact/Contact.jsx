import React, { useState } from "react";

function Contact() {
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");

    async function submit(e) {
        e.preventDefault();

        if (email === "") {
            alert("Please enter a valid email");
            return;
        }
        if (feedback === "") {
            alert("Enter a description too");
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("https://reqres.in/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, feedback }),
            });

            if (!res.ok) {
                throw new Error("Something went wrong");
            }

            setLoading(false);
            alert("Feedback sent successfully");
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-100 p-4">
            <form
                onSubmit={submit}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-indigo-600">Feedback</h2>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
                        Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="feedback" className="mb-1 text-gray-700 font-medium">
                        Feedback
                    </label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        name="feedback"
                        rows={4} // Adjust initial height
                        className="border border-gray-300 rounded-md px-4 py-2 resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Write your feedback here..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-lg hover:from-indigo-700 hover:to-purple-600 transition-all font-semibold"
                >
                    {loading ? "Sending..." : "Send Feedback"}
                </button>
            </form>
        </div>
    );
}

export default Contact;
