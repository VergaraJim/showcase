function MainLayout(props: React.PropsWithChildren) {
  return (
    <div className="w-dvw h-dvh bg-stone-100 dark:bg-stone-900">
      {props.children}
    </div>
  );
}

export default MainLayout;
