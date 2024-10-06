

import Link from "next/link";
export default function Home() {
  return (
  <div>
    <nav>
    <Link id="link1" href="/appetizers/appetizers">appetizers</Link>
    <br></br>
    <Link id = "link2"href="/entrees/entrees">entrees</Link>
    </nav>
   
  </div>

  );
}
