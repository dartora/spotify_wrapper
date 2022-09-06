/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import { after } from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
  search, searchAlbuns, searchArtist, searchTracks, searchPlaylists,
} from '../src/main';

const fetch = require('node-fetch');

global.fetch = fetch;
chai.use(sinonChai);
sinonStubPromise(sinon);

// global.fetch = fetch;

describe('Spotify Wrapper', () => {
// smoke test

  describe('Smoke tests', () => {
    // search
    it('should exist the search method', () => {
      expect(search).to.exist;
    });
    // searchAlbuns
    it('should exist the searchAlbuns method', () => {
      // url = 'https://api.spotify.com/v1/search';
      expect(searchAlbuns).to.exist;
    });
    // searchArtists
    it('should exist the search Artist method', () => {
      expect(searchArtist).to.exist;
    });
    // searchTracks
    it('should exist the search Tracks method', () => {
      expect(searchTracks).to.exist;
    });
    // searchPlaylists
    it('should exist the search Playlists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    let fetchStub;
    beforeEach(() => {
      fetchStub = sinon.stub(global, 'fetch');
    });
    afterEach(() => {
      fetchStub.restore();

      it('should call fetch function', () => {
        const artists = search();
        expect(fetchStub).to.have.been.calledOnce;
      });
      it('should receive the corret url to fetch', () => {
        context('passing one type', () => {
          const artists = search('Incubus', 'artist');

          expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

          const albuns = search('Incubus', 'album');
          expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
        });
        context('passing more than one type', () => {
          const artistsAndAlbuns = search('Incubus', ['artist', 'album']);

          expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
        });
      });
    });
    describe('', () => {
      it('', () => {
      });
    });
  });
});
