"use client";

import { useForm, SubmitHandler } from "react-hook-form";

const AddMessage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const labelClasses = "font-broadacre text-base pb-2 text-silver-700";
  const inputClasses =
    "mb-2 md:mb-8 rounded-md bg-silver-300 text-silver-950 p-2";
  const errorClasses =
    "mb-2 font-broadacre text-sm w-fit h-fit px-2 rounded-xl underline decoration-wavy underline-offset-4 decoration-stop-400";
  const labelErrorClasses = "flex flex-row gap-6 items-center justify-between";
  const submitClasses =
    "my-4 pt-3 pb-2 bg-silver-100 rounded-md border-2 outline outline-4 outline-silver-100 text-silver-950 shadow-2xl space-x-4 cursor-pointer font-balto font-bold hover:scale-[98%] hover:translate-y-[5px] transition ease-in-out hover:shadow-none";

  const onSubmit = async (data: any) => {
    const { name, email, message } = data;
    const res = await fetch("/api/message", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    if (!res.ok) {
      console.log("Failed to add comment");
      return;
    }
    reset();
  };

  return (
    <form
      className="flex w-full flex-col rounded-2xl border-2 bg-silver-200 p-8 text-silver-950"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="flex w-full flex-col justify-center gap-2 text-center">
        <div className="w-full">
          <span className="w-fit">Send us an email at</span>
        </div>
        <div className="w-full skew-x-6 skew-y-2">
          <span className="w-fit rounded-sm bg-sign-500 px-2 font-balto font-bold text-silver-950">
            opensidewalksla@gmail.com
          </span>
        </div>
        <div className="w-full">
          <span className="w-fit">or leave us a message below</span>
        </div>
      </div>
      <div className={labelErrorClasses}>
        <label className={labelClasses}>Name</label>
        {errors.name && <span className={errorClasses}>Name is required.</span>}
      </div>
      <input
        className={inputClasses}
        {...register("name", { required: true })}
      />
      <div className={labelErrorClasses}>
        <label className={labelClasses}>Email</label>
        {errors.email && (
          <p className={errorClasses}>Please enter a valid Email Address.</p>
        )}
      </div>
      <input
        className={inputClasses}
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      <div className={labelErrorClasses}>
        <label className={labelClasses}>Message</label>
        {errors.message && (
          <p className={errorClasses}>
            Your message must be min 2 and max 2000 characters.
          </p>
        )}
      </div>
      <textarea
        className={inputClasses}
        {...register("message", {
          required: true,
          minLength: 2,
          maxLength: 2000,
        })}
      />

      <input
        className={`${submitClasses} ${isSubmitting ? "opacity-50" : ""}`}
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Submit"}
      />
    </form>
  );
};

export default AddMessage;
