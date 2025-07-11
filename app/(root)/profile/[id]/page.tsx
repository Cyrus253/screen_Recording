import React from 'react'
import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { getAllVideosByUser } from '@/lib/actions/video'
import { redirect } from 'next/navigation'
import EmptyState from '@/components/EmptyState'


const page = async ({params, searchParams}:ParamsWithSearch) => {
    const {id} = await params
    const {query, filter} = await searchParams

    const {user, videos} = await getAllVideosByUser(id, query, filter)

    if(!user) redirect('/404')

  return (
    <div >
        <Header subHeader={user?.name} title={user?.name} userImg={user?.image ?? ""} />

      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              thumbnail={video.thumbnailUrl}
              userImg={user?.image ?? ""}
              username={user?.name ?? "Guest"}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Videos video Abavailable yet"
          description="Try adjusting your search."
        />
      )} 
    </div>
  )
}

export default page