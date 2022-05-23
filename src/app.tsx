import { Hero } from "./components/hero";
import { Section } from "./components/section";

export function App() {
  return (
    <>
      <Hero />
      <Section imgSrc="https://images.unsplash.com/photo-1546182208-1e70985e2bf3" title="Blazingly fast setup" side="left">
        <p>
          Quick installation using npm: <code>npm install -g mpmgg</code>.
          Setup by typing <code>mpm init</code> and selecting appropriate options.
          Add plugins using <code>mpm add <i>plugin_name</i></code>.
        </p>
      </Section>
      <Section imgSrc="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a" title="Easy plugin updates" side="right">
        <p>
          Update your plugins by simply typing <code>mpm update</code>.
          Upgrade plugins (changes package.json) with <code>mpm upgrade</code>.
        </p>
      </Section>
      <Section imgSrc="https://images.unsplash.com/photo-1627399270231-7d36245355a9" title="Easy snapshots with Git" side="left">
        <p>
          Your server by default uses Git for version control.
          It allows you to easily create snapshots, and backup your server to the remote repository.
        </p>
      </Section>
      <Section imgSrc="https://images.unsplash.com/photo-1481622254766-0f0a35bf6e77" title="Fully open-source and transparent" side="right">
        <p>
          Everyone can check, fork, and contribute to mpm's code base, and to mpm's repository.
          Checkout <a href="https://github.com/mbledkowski/mpm">GitHub - mpm</a> and <a href="https://github.com/mbledkowski/mpm_repository">GitHub - mpm_repository</a>
        </p>
      </Section>
    </>
  )
}
