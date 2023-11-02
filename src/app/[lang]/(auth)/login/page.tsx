import Logo from "@/components/shared/Logo";

export default function Login() {
  return (
    <main className="bg-assasins-creed bg-fixed bg-no-repeat bg-cover h-[1000px] text-white">
      <div className="w-full bg-black/20 backdrop-blur-sm flex h-[1000px] flex-col items-center justify-center">
        <section className="bg-dark-10 w-[1216px] h-[840px] rounded-lg flex items-center justify-center">
          <div></div>
          <div>
            <Logo width={"140px"} height={"140px"} color="#FFFFFF" />
          </div>
        </section>
      </div>
    </main>
  );
}
