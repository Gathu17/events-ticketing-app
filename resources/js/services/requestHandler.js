import axios from "axios";

// Create axios instance with default config
const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true, // Required for Laravel Sanctum
});



// Add request interceptor to add CSRF token and handle loader
api.interceptors.request.use((config) => {
    const token = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content");
    if (token) {
        config.headers["X-CSRF-TOKEN"] = token;
    }

    // Start loading unless explicitly disabled
    if (config.showLoader !== false) {
        
    }

    return config;
});

// Add response interceptor for error handling and loader
api.interceptors.response.use(
    (response) => {
       
        return response.data;
    },
    (error) => {
       

        if (error.response?.status === 401) {
            // Handle unauthorized access
            window.location.href = "/login";
        }
        if (error.response?.status === 403) {
            // Handle forbidden access
            console.error("Forbidden access");
        }
        if (error.response?.status === 422) {
            // Handle validation errors
            return Promise.reject(error.response.data);
        }
        // Handle other errors
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

// Event related requests
const eventService = {
    getAllEvents: (params) => api.get("/events", { params }),
    getEvent: (id) => api.get(`/events/${id}`),
    createEvent: (data) => api.post("/events", data),
    updateEvent: (id, data) => api.put(`/events/${id}`, data),
    deleteEvent: (id) => api.delete(`/events/${id}`),
    searchEvents: (query) => api.get("/events/search", { params: { query } }),
};

// User related requests
const userService = {
    getProfile: () => api.get("/user/profile"),
    updateProfile: (data) => api.put("/user/profile", data),
    getMyEvents: () => api.get("/user/events"),
    registerForEvent: (eventId) => api.post(`/events/${eventId}/register`),
};

// Authentication related requests
const authService = {
    login: (credentials) => api.post("/login", credentials),
    register: (data) => api.post("/register", data),
    logout: () => api.post("/logout"),
    forgotPassword: (email) => api.post("/forgot-password", { email }),
    resetPassword: (data) => api.post("/reset-password", data),
};

// Organizer related requests
const organizerService = {
    getMyOrganizedEvents: () => api.get("/organizer/events"),
    getEventParticipants: (eventId) =>
        api.get(`/organizer/events/${eventId}/participants`),
    updateEventStatus: (eventId, status) =>
        api.put(`/organizer/events/${eventId}/status`, { status }),
};

// Export all services
export {
    api as default,
    eventService,
    userService,
    authService,
    organizerService,
};


