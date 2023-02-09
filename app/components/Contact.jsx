"use client";
import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex flex-col items-center my-16" id="contact">
      <h2 className="text-2xl md:text-5xl font-bold underline ">Contact Me.</h2>
      <div className="py-4  font-bold text-xl ">
        <p className="pb-2">Rwanda, Kigali</p>
        <p>+250786125117</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-6 pt-10"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("Email", { required: true })}
          placeholder="Email.."
          className="text-black font-bold text-xl outline-none rounded-sm w-80 py-2"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("message")}
          placeholder="Message.."
          className="text-black font-bold text-xl outline-none rounded-sm w-80 py-2"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          type="submit"
          className="bg-slate-700 py-3 rounded-sm font-semibold hover:bg-slate-500 cursor-pointer hover:ease"
        />
      </form>
    </div>
  );
}
