import axios from "axios";



const axiosPublic = axios.create({
    baseURL: "https://task-mate-server-project-kgph3rc7k-anjus-projects-6a90d7b7.vercel.app",
    

})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;