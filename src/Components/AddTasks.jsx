/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";


const AddTasks = ({ onSubmit }) => {
    const { register, handleSubmit: hookFormSubmit } = useForm();

    const onSubmitForm = (data) => {
        // Handle form submission logic here
        console.log(data);
        if (onSubmit) {
            onSubmit(data);
        }
    };
    return (
        <div>
             <form onSubmit={hookFormSubmit(onSubmitForm)}className="max-w-7xl mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          {...register("title", { required: true })}
          className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          {...register("description", { required: true })}
          rows="4"
          className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-purple-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="deadline" className="block text-gray-700 font-bold mb-2">
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          {...register("deadline", { required: true })}
          className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 font-bold mb-2">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          {...register("priority", { required: true })}
          className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-purple-500"
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
                    type="submit"
                    className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Create Task
                </button>
    </form>
        </div>
    );
};

export default AddTasks;