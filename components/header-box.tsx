export default function HeaderBox({
  title,
  subTitle,
  type,
  user,
}: HeaderBoxProps) {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}{" "}
        {type === "greeting" && user && user !== "Guest" ? (
          <span className="text-bankGradient"> {user} </span>
        ) : (
          <span className="text-bankGradient"> Guest </span>
        )}
      </h1>
      <p className="header-box-subtext">{subTitle}</p>
    </div>
  );
}
