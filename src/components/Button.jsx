export default function Button({ children, type }) {
  const styles = {
    base: "text-slate-50 hover:rounded-full hover:px-5 py-2 hover:bg-slate-100/50 transition-all duration-700",
    hamburger:"bg-slate-50 py-3 text-[#5a636c] focus:bg-yellow-500 transition-all duration-700"
  };
  return <button className={styles[type]}>{children}</button>;
}
