
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog"
import { SearchIcon, StarIcon } from "lucide-react"

const nfts = [
  {
    id: 1,
    name: "Cosmic Dreamer #42",
    description: "A mesmerizing journey through the cosmos, captured in vibrant digital brushstrokes.",
    image: "",
    price: 0.5,
    rating: 4.5,
    reviews: 120,
    artist: "StellarArtist",
    created: "2023-05-15",
    edition: "1 of 1",
    blockchain: "Ethereum",
    tags: ["Rare", "Animated", "Space"]
  },
  {
    id: 2,
    name: "Neon Samurai",
    description: "A futuristic warrior bathed in the glow of a cyberpunk cityscape.",
    image: "",
    price: 0.8,
    rating: 4.7,
    reviews: 95,
    artist: "CyberBrush",
    created: "2023-06-02",
    edition: "3 of 10",
    blockchain: "Ethereum",
    tags: ["Limited Edition", "Cyberpunk", "Character"]
  },
  {
    id: 3,
    name: "Ethereal Whisper",
    description: "An abstract representation of sound waves, visualizing the unseen beauty of music.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kWY2kVQaIijQsljCTum2LpHJR_NV67KcHQ&s",
    price: 0.3,
    rating: 4.3,
    reviews: 78,
    artist: "SonicVision",
    created: "2023-04-30",
    edition: "5 of 50",
    blockchain: "Ethereum",
    tags: ["Abstract", "Music", "Animated"]
  },
  {
    id: 4,
    name: "Pixel Punk Prodigy",
    description: "A retro-inspired pixelated portrait celebrating the early days of digital art.",
    image:"",
    price: 0.6,
    rating: 4.6,
    reviews: 112,
    artist: "RetroPixelMaster",
    created: "2023-05-20",
    edition: "7 of 100",
    blockchain: "Ethereum",
    tags: ["Pixel Art", "Retro", "Portrait"]
  },
  {
    id: 5,
    name: "Quantum Quasar Queen",
    description: "A regal figure emerging from the swirling energies of a distant quasar.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_dccZ_i0qxBtcFEAo75Ey8sW7imPjksjh3DiwKQJ1NQijoXYuXzUoOkIKA&s",
    price: 1.2,
    rating: 4.9,
    reviews: 150,
    artist: "GalacticPainter",
    created: "2023-06-10",
    edition: "1 of 1",
    blockchain: "Ethereum",
    tags: ["Rare", "Space", "Portrait"]
  },
  {
    id: 6,
    name: "Cybernetic Serendipity",
    description: "An intricate blend of organic forms and mechanical precision, exploring the fusion of nature and technology.",
    image: "",
    price: 0.9,
    rating: 4.8,
    reviews: 88,
    artist: "TechnoNaturalist",
    created: "2023-05-05",
    edition: "2 of 5",
    blockchain: "Ethereum",
    tags: ["Surreal", "Technology", "Nature"]
  }
]

export default function Explore() {
  const [selectedNFT, setSelectedNFT] = useState(null)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button onClick={() => window.history.back()} className="text-blue-500 hover:text-blue-700">
          &larr; Back
        </Button>
      </div>
  
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Explore NFT Marketplace</h1>
        <div className="flex gap-4 items-center">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className="pl-8"
              placeholder="Search NFTs"
              type="search"
            />
          </div>
          <Button>Search</Button>
        </div>
      </header>
  
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All NFTs</TabsTrigger>
          <TabsTrigger value="art">Digital Art</TabsTrigger>
          <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="virtual-worlds">Virtual Worlds</TabsTrigger>
        </TabsList>
      </Tabs>
  
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {nfts.map((nft) => (
          <Card key={nft.id}>
            <CardHeader>
              <img
                src={nft.image}
                alt={`NFT artwork: ${nft.name}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl mb-2">{nft.name}</CardTitle>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {nft.description}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">{nft.rating.toFixed(1)}</span>
                <span className="text-gray-500">({nft.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>#{nft.id.toString().padStart(4, '0')}</Badge>
                {nft.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold">{nft.price.toFixed(2)} ETH</span>
              <Button onClick={() => setSelectedNFT(nft)}>View NFT</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
  
      <Dialog open={selectedNFT !== null} onOpenChange={() => setSelectedNFT(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex justify-between items-center mb-4">
            <DialogHeader>
              <DialogTitle>{selectedNFT?.name}</DialogTitle>
              <DialogDescription>
                Created by {selectedNFT?.artist} on {selectedNFT?.created}
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => setSelectedNFT(null)} className="text-gray-600">
              Back
            </Button>
          </div>
          <div className="grid gap-4 py-4">
            <img
              src={selectedNFT?.image}
              alt={selectedNFT?.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-gray-700">{selectedNFT?.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Price</h4>
                <p>{selectedNFT?.price.toFixed(2)} ETH</p>
              </div>
              <div>
                <h4 className="font-semibold">Edition</h4>
                <p>{selectedNFT?.edition}</p>
              </div>
              <div>
                <h4 className="font-semibold">Blockchain</h4>
                <p>{selectedNFT?.blockchain}</p>
              </div>
              <div>
                <h4 className="font-semibold">Rating</h4>
                <p>{selectedNFT?.rating.toFixed(1)} ({selectedNFT?.reviews} reviews)</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedNFT?.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
          <DialogClose asChild>
            <Button className="w-full">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}  