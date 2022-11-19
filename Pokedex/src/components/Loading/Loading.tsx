import { LoadingStyle } from "./Loading.style"

export function Loading() {
  return (
    <LoadingStyle className="loading-page">
        <div className="loading">
          <img src="/src/assets/pokeball.gif" alt="" />
          <h1>Loading ...</h1>
          </div>
      </LoadingStyle>
  )
}