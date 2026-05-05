"use client";

import { useMemo, useState } from "react";
import type { ProjectCaseStudy } from "@/data/portfolio";

type ProjectDemoProps = {
  project: ProjectCaseStudy;
};

const products = [
  { name: "Modern Backpack", price: 84, tag: "Travel" },
  { name: "Desk Lamp", price: 46, tag: "Home" },
  { name: "Wireless Keyboard", price: 72, tag: "Office" },
];

const tasks = [
  { title: "Design mobile board", status: "In progress", owner: "HHZ" },
  { title: "Build auth middleware", status: "Review", owner: "API" },
  { title: "Prepare release notes", status: "Done", owner: "QA" },
];

const messages = [
  "Can we ship the responsive update today?",
  "API is ready. I am testing the socket events now.",
  "Great, I will check the mobile layout next.",
];

const metrics = [
  { label: "Active users", value: "12.8k", delta: "+18%" },
  { label: "Conversion", value: "7.4%", delta: "+2.1%" },
  { label: "Open tickets", value: "24", delta: "-9%" },
];

export function ProjectDemo({ project }: ProjectDemoProps) {
  const [cart, setCart] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("In progress");
  const [messageText, setMessageText] = useState("");
  const [range, setRange] = useState(68);

  const filteredTasks = useMemo(
    () =>
      selectedStatus === "All"
        ? tasks
        : tasks.filter((task) => task.status === selectedStatus),
    [selectedStatus],
  );

  if (project.slug === "e-commerce-platform") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="feature-card">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Storefront</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                Product catalog
              </h2>
            </div>
            <span className="tag-chip">{cart} in cart</span>
          </div>
          <div className="mt-6 grid gap-4">
            {products.map((product) => (
              <button
                key={product.name}
                type="button"
                onClick={() => setCart((value) => value + 1)}
                className="flex items-center justify-between rounded-md border border-slate-900/10 bg-slate-50 p-4 text-left hover:border-blue-500/50 hover:bg-blue-50 dark:border-white/10 dark:bg-slate-950/40 dark:hover:bg-white/10"
              >
                <span>
                  <span className="block font-bold text-slate-950 dark:text-white">
                    {product.name}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {product.tag}
                  </span>
                </span>
                <span className="font-bold text-blue-700 dark:text-blue-300">
                  ${product.price}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="feature-card">
          <p className="eyebrow">Checkout</p>
          <div className="mt-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Items</span>
              <span>{cart}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Estimated total</span>
              <span>${cart * 72}</span>
            </div>
            <button type="button" className="button-primary w-full">
              Create checkout session
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === "task-management-app") {
    const statuses = ["All", "In progress", "Review", "Done"];

    return (
      <div className="feature-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Task Board</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
              Team sprint view
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setSelectedStatus(status)}
                className={
                  status === selectedStatus ? "button-primary min-h-10" : "small-button"
                }
              >
                {status}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {filteredTasks.map((task) => (
            <article key={task.title} className="rounded-md border border-slate-900/10 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40">
              <span className="tag-chip">{task.status}</span>
              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                {task.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Owner: {task.owner}
              </p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (project.slug === "real-time-chat-app") {
    const previewMessages = messageText ? [...messages, messageText] : messages;

    return (
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="feature-card">
          <p className="eyebrow">Presence</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
            Active rooms
          </h2>
          <div className="mt-6 space-y-3">
            {["Product", "Engineering", "Support"].map((room, index) => (
              <div key={room} className="contact-link flex justify-between">
                <span>{room}</span>
                <span>{index + 3} online</span>
              </div>
            ))}
          </div>
        </div>
        <div className="feature-card">
          <p className="eyebrow">Conversation</p>
          <div className="mt-6 space-y-3">
            {previewMessages.map((message) => (
              <p key={message} className="rounded-md bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-950/50 dark:text-slate-200">
                {message}
              </p>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <input
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
              className="form-input"
              placeholder="Type a sample message"
            />
            <button type="button" onClick={() => setMessageText("")} className="small-button">
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="feature-card">
        <p className="eyebrow">Dashboard</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
          Operations overview
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                {metric.delta}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="feature-card">
        <label className="form-label" htmlFor="health-score">
          System health score
        </label>
        <input
          id="health-score"
          type="range"
          min="0"
          max="100"
          value={range}
          onChange={(event) => setRange(Number(event.target.value))}
          className="mt-6 w-full accent-blue-600"
        />
        <div className="mt-6 h-4 overflow-hidden rounded-md bg-slate-200 dark:bg-slate-950">
          <div className="h-full bg-emerald-500" style={{ width: `${range}%` }} />
        </div>
        <p className="mt-4 text-sm font-bold text-slate-700 dark:text-slate-200">
          {range}% healthy
        </p>
      </div>
    </div>
  );
}
