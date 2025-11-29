import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { guestlist } from "./guestlist";
import Invite from "./Invite";

const InviteRouteGuard: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  // Case-insensitive match, trim whitespace
  const isGuest = name && guestlist.some(
    guest => guest.toLowerCase() === name.trim().toLowerCase()
  );
  if (!isGuest) {
    return <Navigate to="/" replace />;
  }
  return <Invite />;
};

export default InviteRouteGuard;

