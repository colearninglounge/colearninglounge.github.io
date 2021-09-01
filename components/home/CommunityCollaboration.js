import CollaborationCollection from "./collaboration/CollaborationCollection";

const CommunityCollaboration = () => {
  return (
    <div className="mt-20 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <div className="">
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Community Collaboration
        </h2>
        <CollaborationCollection />
      </div>
    </div>
  );
};

export default CommunityCollaboration;
