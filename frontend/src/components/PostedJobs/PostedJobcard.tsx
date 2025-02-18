const PostedJobcard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 rounded-xl p-4 border-l-2 border-l-clairt-400 hover:shadow-lg hover:shadow-clairt-400/10 transition-shadow duration-300 cursor-pointer">
      <div className="text-sm font-semibold">{props.jobTitle}</div>
      <div className="text-xs text-mine-shaft-300 font-medium">{props.location}</div>
      <div className="text-xs text-mine-shaft-300">{props.posted}</div>
    </div>
  );
};

export default PostedJobcard;