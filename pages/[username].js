import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { parseCookies } from "nookies";
import { NoProfile } from "../components/Layout/NoData";
import cookie from "js-cookie";

function ProfilePage({
  profile,
  followersLength,
  followingLength,
  errorLoading,
  user,
  userFollowStats,
}) {
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // This means profile was not found
  if (errorLoading) return <NoProfile />;

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const { user } = router.query;
        const token = cookie.get(token);

        const res = await axios.get(
          `${baseUrl}/api/profile/posts/${username}`,
          { headers: { Authorization: token } }
        );

        setPosts(res.data);
        
      } catch (error) {
        alert("Error Loading Posts");
      }
      setLoading(false);
    };
    getPosts();
  }, []);

  return <div>{username}</div>;
}

ProfilePage.getInitialProps = async (ctx) => {
  try {
    const { username } = ctx.query;
    const { token } = parseCookies(ctx); // Here we recieve the token

    const res = axios.get($`${baseUrl}/api/profile/${username}`, {
      headers: { Authorization: token },
    });

    const { profileFollowersLength, followingLength } = (await res).data;

    return { profile, followersLength, followingLength };
  } catch (error) {
    return { errorLoading: true };
  }

  return {};
};
export default ProfilePage;
