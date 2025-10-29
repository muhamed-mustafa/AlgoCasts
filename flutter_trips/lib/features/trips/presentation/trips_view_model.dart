import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../trips/data/trips_repository.dart';
import '../../trips/domain/trip.dart';

class TripsViewModel extends StateNotifier<AsyncValue<List<Trip>>> {
  final TripsRepository _repository;

  TripsViewModel(this._repository) : super(const AsyncLoading()) {
    refresh();
  }

  Future<void> refresh() async {
    try {
      state = const AsyncLoading();
      final trips = await _repository.fetchTrips();
      state = AsyncData(trips);
    } catch (e, st) {
      state = AsyncError(e, st);
    }
  }
}

final tripsRepositoryProvider = Provider<TripsRepository>((ref) {
  return const AssetsTripsRepository();
});

final tripsViewModelProvider =
    StateNotifierProvider<TripsViewModel, AsyncValue<List<Trip>>>((ref) {
  final repo = ref.watch(tripsRepositoryProvider);
  return TripsViewModel(repo);
});
