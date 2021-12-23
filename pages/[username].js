import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { NoProfilePosts, NoProfile } from "../components/Layout/NoData";
import { Grid } from "semantic-ui-react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import cookie from "js-cookie";
import ProfileMenuTabs from "../components/Profile/ProfileMenuTabs";
import ProfileHeader from "../components/Profile/ProfileHeader";
import CardPost from "../components/Post/CardPost";
import { PlaceHolderPosts } from "../components/Layout/PlaceHolderGroup";
import { PostDeleteToastr } from "../components/Layout/Toastr";

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
  // This will track the active item from the Tab Menu ('Profile', 'Followers', 'Following', etc..)
  const [activeItem, setActiveItem] = useState("profile");

  const [showToastr, setShowToastr] = useState(false);


  // This will be when User clicks on the tabs to render a different component depending on the Active item.
  const handleItemClick = (item) => setActiveItem(item);

  // This is the follow stats information on the logged User
  const [loggedUserFollowStats, setUserFollowStats] = useState(userFollowStats);

  // This means the logged in user is viewing his Own account. Only then we can render Update Profile  and Settings Tab
  const ownAccount = profile.user._id === user._id;

  // This means profile was not found
  if (errorLoading) return <NoProfile />;

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const { username } = router.query;
        const res = await axios.get(
          `${baseUrl}/api/profile/posts/${username}`,
          {
            headers: { Authorization: cookie.get("token") },
          }
        );

        setPosts(res.data);
      } catch (error) {
        alert("Error Loading Posts");
        console.log(error);
      }

      setLoading(false);
    };
    getPosts();
  }, [router.query.username]);

    useEffect(() => {
      showToastr && setTimeout(() => setShowToastr(false), 4000);
    }, [showToastr]);

  return (
    <>
      {showToastr && <PostDeleteToastr />}
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <ProfileMenuTabs
              activeItem={activeItem}
              handleItemClick={handleItemClick}
              followersLength={followersLength}
              followingLength={followingLength}
              ownAccount={ownAccount}
              loggedUserFollowStats={loggedUserFollowStats}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {/* Here we check if Profile is opend */}
            {activeItem === "profile" && (
              <>
                <ProfileHeader
                  profile={profile}
                  ownAccount={ownAccount}
                  loggedUserFollowStats={loggedUserFollowStats}
                  setUserFollowStats={setUserFollowStats}
                />

                {loading ? (
                  <PlaceHolderPosts />
                ) : posts.length > 0 ? (
                  posts.map((post) => (
                    <CardPost
                      key={post._id}
                      post={post}
                      user={user}
                      setPosts={setPosts}
                      setShowToastr={setShowToastr}
                    />
                  ))
                ) : (
                  <NoProfilePosts />
                )}
              </>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

ProfilePage.getInitialProps = async (ctx) => {
  try {
    const { username } = ctx.query;
    const { token } = parseCookies(ctx); // Here we recieve the token

    const res = await axios.get(`${baseUrl}/api/profile/${username}`, {
      headers: { Authorization: token },
    });

    const { profile, followersLength, followingLength } = res.data;

    return { profile, followersLength, followingLength };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default ProfilePage;
