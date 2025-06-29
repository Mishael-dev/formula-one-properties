export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl px-4 py-2 mx-auto ">
      <div className="my-6">{children}</div>
    </div>
  );
}

export function Container_lg({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl px-4 py-2 mx-auto ">
      <div className="my-6">{children}</div>
    </div>
  );
}
