import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Fake from "../assets/fake-feminino.jpg"
import PostImage from "../assets/post-example.png"

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />

      <Post
        profileImage={Fake}
        postImage={PostImage}
        profileName="Fulano de tal"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin"
      />
      <Post
        profileImage={Fake}
        postImage={PostImage}
        profileName="Fulano de tal"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin"
      />
      <Post
        profileImage={Fake}
        postImage={PostImage}
        profileName="Fulano de tal"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin"
      />
    </ScrollView>
  );
}