# **Ascend — Investment App**

Ascend is a modern investment platform that allows users to invest in stocks, mutual funds, and ETFs with ease. The app provides a clean UI, secure authentication, real-time news updates, and seamless data fetching — built with a robust full‑stack architecture.

---

## **Features**

* Invest in **stocks**, **mutual funds**, and **ETFs**
* Secure **Google OAuth login** using Passport
* Real-time **finance news** fetched via News API
* Persistent login managed with **cookies** and sessions
* Fully responsive UI built with **React.js** and light usage of **Tailwind CSS**
* RESTful API architecture
* Backend hosted on **Render** and frontend on **Vercel**

---

## **Tech Stack**

### **Frontend**

* **React.js**
* **Tailwind CSS** (partial usage)
* **CSS** (main usage)
* **Axios** (API requests)
* **Lucide React** (icons)
* **React Hooks**

  * `useState`
  * `useEffect`
  * `useContext` (global state management)

### **Backend**

* **Node.js**
* **Express.js**
* **RESTful APIs**
* **Google OAuth (Passport.js)**
* **Cookie-based sessions**
* **CORS**
* **Note-As backend server is running gon free plan,it needs to activate by one's clicks on the backend link then click on front end.**

### **Database**

* **Neon Postgres** (cloud-hosted PostgreSQL)

### **Hosting**

* **Frontend:** Vercel
* **Backend:** Render

---

## **APIs Used**

* **News API** — fetches investment and finance news for users

---
## **Authentication**

* Google OAuth powered by **Passport.js**
* Cookies used for session management
* CORS configured for secure cross‑origin access

---

## **News Integration**

* Fetches up‑to‑date financial and market‑related news
* Axios handles API requests
* Displayed using dynamic React components

---

## **Deployment**

* Backend deployed on **Render**-https://ascend-backend-14.onrender.com
* Frontend deployed on **Vercel**
* Environment variables stored securely on both platforms

---

## **Getting Started**

### **Clone the Repository**

```
git clone https://github.com/vedantchavare04/ascend.git
cd ascend
```

### **Install Dependencies**

Frontend:

```
npm install
```

Backend:

```
cd src
npm install
```

### **Run Locally**

Frontend:

```
npm start
```

Backend:

```
npm run dev
```

---

## **Contributing**

Contributions, issues, and feature requests are welcome.

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**

For inquiries or suggestions, feel free to reach out.

**Ascend — Invest Smarter. Grow Faster.**
